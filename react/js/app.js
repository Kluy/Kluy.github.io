/**
 * Created by TERM2 on 20.09.2017.
 */

// ReactDOM.render(
//     React.createElement('h1', null, 'Привет, Мир!'),
//     document.getElementById('root')
// );
//
// ReactDOM.render(
// <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );
//
// var App = React.createClass({
//     render: function() {
//         return (
//             <div className="app">
//                 Всем привет, я компонент App!
//             </div>
//         );
//     }
// });
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

window.ee = new EventEmitter();

var Article = React.createClass({

    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },

    getInitialState: function() {
        return {
            visible: false
        };
    },

    readMoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },

    render: function() {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        console.log('render',this);

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#" onClick={this.readMoreClick} className={'news__readmore ' + (visible ? 'none' : '')}>Подробнее</a>
                <p className={'news__big-text ' + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        );
    }
});

var News = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    getInitialState: function() {
        return {
            counter: 0
        }
    },

    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});

var Add = React.createClass({

    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },

    // onAuthorChange: function(e) {
    //     if (e.target.value.trim().length > 0) {
    //         this.setState({authorIsEmpty: false})
    //     } else {
    //         this.setState({authorIsEmpty: true})
    //     }
    // },
    // onTextChange: function(e) {
    //     if (e.target.value.trim().length > 0) {
    //         this.setState({textIsEmpty: false})
    //     } else {
    //         this.setState({textIsEmpty: true})
    //     }
    // },

    onFieldChange: function(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({[''+fieldName]:false})
        } else {
            this.setState({[''+fieldName]:true})
        }
    },

    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },

    onBtnClickHandler: function(e) {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];
        window.ee.emit('News.add', item);
    },

    onCheckRuleClick: function(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
    },

    render: function() {
        return (
            <form className='add cf'>
                <input type='text' className='add__author' onChange={this.onFieldChange.bind(this, 'authorIsEmpty')} defaultValue='' placeholder='Ваше имя' ref='author'  />
                <textarea className='add__text' onChange={this.onFieldChange.bind(this, 'textIsEmpty')} defaultValue='' placeholder='Текст новости' ref='text'  />
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами </label>
                <button className='add-button' onClick={this.onBtnClickHandler} ref='alert_button' className='button'
                        disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}>Показать алерт</button>
            </form>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            news: my_news
        };
    },

    componentDidMount: function() {
        var self = this;
        window.ee.addListener('News.add', function(item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    },

    componentWillUnmount: function() {
        window.ee.removeListener('News.add');
    },

    render: function() {
        console.log('render');
        return (
            <div className='app'>
                <Add />
                <h3>Новости</h3>
                <News data={this.state.news} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);