let itembar = document.getElementById('barlogo')
let itemdivmenu = document.getElementById('verticalmenu')
let itemone = document.getElementById('menu_a')
let itemtwo = document.getElementById('menu_b')
let itemthree = document.getElementById('menu_c')
let itemfour = document.getElementById('menu_d')
let itemlogo = document.getElementById('logojs')
let header_ = document.getElementById('header')
let close = document.getElementById('closebutton')
let click_= document.getElementById('click')
let aboutsection_= document.getElementById('aboutsection')
let skillsection_= document.getElementById('skillsection')
let fot =document.getElementById('footer')
let abouttitle_ = document.getElementById('abouttitle')
let aboutlane_ = document.getElementById('aboutscroll')
let contback = document.getElementById('contactbackgr')
let contitle_ =document.getElementById('contitle')
let contitlep_ =document.getElementById('contitlep')
let border_ =document.getElementById('border')
let skillsandpro =document.getElementById('projectscroll')
let projects =document.getElementById('projectsss')
let secondbackgr_ =document.getElementById('footerbackground')
let clickdiv_ =document.getElementById('clickdivv')
let clickdivnext_ =document.getElementById('clickdivnext')
let clickdivback_ =document.getElementById('clickdivback')
let clicknext_ =document.getElementById('clicknext')
let clickback_ =document.getElementById('clickback')
let firstlane =document.getElementById('firstlane_')
let devmob =document.getElementById('developermobile')


let hidebarandlogo = function(){
	 itembar.style.display = 'none'
     itemlogo.style.display ='none'
     itemdivmenu.style.display = 'flex'
     close.style.display ='block'
     firstlane.style.backgroundColor = 'rgba(0, 0, 0, 0)'

 }
 itembar.addEventListener('click',hidebarandlogo)


let closemenu = function(){
     itemdivmenu.style.display = 'none'
     itembar.style.display = 'block'
     itemlogo.style.display ='block'
     firstlane.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
 }
 itemdivmenu.addEventListener('click',closemenu)


let changeBac = function(){
     body.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     fot.style.backgroundColor = "rgba(0, 0, 0, 1)"
     skillsection_.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     aboutlane_.style.color = "rgba(255, 255, 255, 1)"
     aboutlane_.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     contitlep_.style.color = "rgba(82, 75, 111, 1)"
     border_.style.borderColor = "rgba(82, 75, 111, 1)"
     skillsandpro.style.color = "rgba(255, 255, 255, 1)"
     projects.style.color = "rgba(255, 255, 255, 1)"
     secondbackgr_.style.backgroundImage = 'url(./img/DSC_4509raz.jpg)'
     secondbackgr_.style.backgroundPosition = 'center'
     clickdivnext_.style.display = 'block'
     clickdivback_.style.display = 'block'
     clickdiv_.style.display = 'none'
     devmob.style.color = 'rgba(255, 255, 255, 1)'
 }
 click_.addEventListener('click',changeBac)


let changeBacnext = function(){
     body.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     fot.style.backgroundColor = "rgba(0, 0, 0, 1)"
     skillsection_.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     aboutlane_.style.color = "rgba(255, 255, 255, 1)"
     aboutlane_.style.backgroundColor = "rgba(82, 75, 111, 1.0)"
     contitlep_.style.color = "rgba(82, 75, 111, 1)"
     border_.style.borderColor = "rgba(82, 75, 111, 1)"
     skillsandpro.style.color = "rgba(255, 255, 255, 1)"
     projects.style.color = "rgba(255, 255, 255, 1)"
     secondbackgr_.style.backgroundImage = 'url(./img/IMG_2389.jpg)'
     secondbackgr_.style.backgroundPosition = 'left'
     clickdivnext_.style.display = 'none'
     clickdivback_.style.display = 'block'
     clickdiv_.style.display = 'none'
     devmob.style.color = 'rgba(255, 255, 255, 1)'
 }
 clicknext_.addEventListener('click',changeBacnext)


let back = function(){
     body.style.backgroundColor = ""
     fot.style.backgroundColor = ""
     skillsection_.style.backgroundColor = ""
     aboutlane_.style.color = ""
     aboutlane_.style.backgroundColor = ""
     contitlep_.style.color = ""
     border_.style.borderColor = ""
     skillsandpro.style.color = ""
     projects.style.color = ""
     secondbackgr_.style.backgroundImage = 'url(./img/IMG_2040-2razm.jpg)'
     secondbackgr_.style.backgroundPosition = 'center'
     clickdivnext_.style.display = 'none'
     clickdivback_.style.display = 'none'
     clickdiv_.style.display = 'block'
 }
 clickback_.addEventListener('click',back)



const blocksToChange = document.querySelectorAll('.text');
const button = document.querySelector('.click');

function changeBackgroundColor(blocksToChange, color) {
     blocksToChange.forEach(block => block.style.color = color);
 }
 click.addEventListener('click', () => changeBackgroundColor(blocksToChange, "white"));




  
 
 

 

 