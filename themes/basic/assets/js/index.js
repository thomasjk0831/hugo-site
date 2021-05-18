import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

// axios.get('https://api.kanye.rest')
// .then(res=>{
//     console.log(res.data)
// })

ReactDOM.render(<Main />, document.getElementById('app'))


// 'use strict'
// import axios from 'axios';
// import lunr from 'lunr';

// window.SearchApp = {
//     searchField: document.getElementById("searchField"),
//     searchButton: document.getElementById("searchButton"),
//     output: document.getElementById("output"),
//     searchData: {},
//     searchIndex: {} 
// };


// axios
//   .get('/search/index.json')
//   .then(response=>{
//       SearchApp.searchData = response.data;

//       SearchApp.searchIndex = lunr(function(){
//           this.ref('href');
//           this.field('title');
//           this.field('body');
//           response.data.results.forEach(e=>{
//               this.add(e)
//           })
//       })

//   })

//   SearchApp.searchButton.addEventListener('click', search);

//   function search(){
//       console.log("searching")
//       let searchText = SearchApp.searchField.value

//       let resultList = SearchApp.searchIndex.search(searchText)

//       let list = []
//       let results = resultList.map(entry=>{
//           SearchApp.searchData.results.filter(d=>{
//               if(entry.ref == d.href){
//                   list.push(d)
//               }
//           })
//       })

//       display(list)
//   }

// function display(list){
//     SearchApp.output.innerText=''
//     if(list.length > 0){
//         const ul = document.createElement("ul")
//         list.forEach(el=>{
//             const li = document.createElement("li")
//             const a = document.createElement("a")
//             a.href = el.href
//             a.text = el.title
//             li.appendChild(a)
//             ul.appendChild(li)
//         })
//         SearchApp.output.appendChild(ul)
//     }else {
//         SearchApp.output.innerHTML = "Nothing Found"
//     }
// }

