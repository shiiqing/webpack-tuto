/**
 * @desc 工具函数
 */
 function show(content) {
   window.document.getElementById('app').innerText = 'hello,' + content;
   console.log('hello worlds')();
}


module.exports = show;