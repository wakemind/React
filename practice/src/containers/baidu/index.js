import React from 'react';
import jsonp from 'fetch-jsonp';
import 'bootstrap/dist/css/bootstrap.min.css';

class Baidu extends React.Component {

    constructor(...args) {

        super(...args);

        this.state = {
        	wordList :  [],
            index : -1,
            listShow : false
        }

    }

    /*
    + 根据关键字获得查询结果
    + @param string keyword 关键字
    + @param function callback 回调函数
    */
    getDatas = (keyword,callback)=>{

    	if(keyword){
	    	jsonp(`https://www.baidu.com/su?wd=${keyword}`, { jsonpCallback: 'cb' })
			    .then(function(response) {
			        return response.json()
			    })
			    .then(function(datas) {

			        callback(datas.s);

			    })
			    .catch(function(ex) {
			        console.log('parsing failed', ex);
			    });
		  }else{
        
        // 隐藏关键字列表
        this.setState({listShow:false});
      }
    }

	/*
	+ 监听输入框输入
    */
    inputEve = (event)=> {

    		let  keyword = event.target.value;

    		this.currtKeyword = keyword;
    		this.getDatas(keyword,(rs)=>{

    			console.log(rs);
    			this.setState({wordList:rs});
    		});
    }

    /*
	+ 监听输入框获得焦点
    */
	focusEve = () => {

    	this.getDatas(this.currtKeyword,(rs)=>{

			this.setState({index:-1,wordList:rs,listShow:true});
		});
	}

    /*
	+ 监听键盘的上下箭头与回车
    */
    keyboardEve = (event)=> {

		this.setState({listShow:true});
    	let code = event.keyCode;

    	// 38 向上 40 向下
   		if(code === 38 || code === 40){

   			let {index,wordList} = this.state;
   			// 向上时+ ; 向下时-
   			code === 38 ? index-- : index++;

   			// 关键词总数
   			let wordLen =  wordList.length-1;
   			// 到最顶后转最底一个
   			index = index < -1 ? wordLen :index;
   			// 到最底后转最顶一个
   			index = index > wordLen  ? -1 : index;

   			this.setState({index:index});

        // 监听回车
   		}else if(code === 13){

            // 隐藏关键字列表
            this.setState({listShow:false});
      }

    }

    /*
	+ 监听鼠标点击列表项
    */
    clickEve = (event) => {

    	let keyword = event.target.innerHTML;

		this.currtKeyword = keyword;

		// 隐藏关键字列表
		this.setState({listShow:false});
	}


    render() {

    	return (
    		<div className="row">
	            <div className="col-sm-8 col-sm-coffset-2">
		            <div className="panel panel-default" onKeyDown={this.keyboardEve}>
		                <div className="panel-heading">
		                    <input type="text"
			                    value={this.state.index === -1 ? this.currtKeyword : this.state.wordList[this.state.index]}
			                    className="form-control"
			                    onChange={this.inputEve}
			                    onFocus = {this.focusEve}
			                />
		                </div>
		                <div className="panel-body">
		                    <ul className={"list-group "+ (this.state.listShow ? '' : 'hide')}>
		                    	{
		                    		this.state.wordList.map( (word,index) =>{
		                    			let isActive = this.state.index === index ? 'active' : '';
		                    			return <li key={index} className={"list-group-item " +isActive} onClick={this.clickEve}>{word}</li>
		                    		})
		                    	}
		                    </ul>
		                </div>
		                <div className="panel-footer"></div>
		            </div>
	            </div>
	        </div>
    	)
    }


}

export default Baidu;


