const slides = document.getElementsByClassName('slide')
const rightArrow = document.getElementsByClassName('right-arrow')[0]
const leftArrow = document.getElementsByClassName('left-arrow')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]
const skillSections = document.getElementsByClassName('skills')

const liInfo = [
    'Self-taught Programmer',
    'Started programming in highschool',
    'Made Google course in android apps development (Java basics)',
    'Made Udemy Web Developer Bootcamp course (MERN)',
    'Studied React on my own'
]
const web = {
    css: './img/web/css.svg',
    html: './img/web/html.svg',
    js: './img/web/js.svg',
    react: './img/web/react.svg',
    icon: './img/web/www.svg',
    title:'Web Developer Languages'
}
const programming = {
    c: './img/programming/c.svg',
    java: './img/programming/java.svg',
    python: './img/programming/python.svg',
    icon: './img/programming/computer.svg',
    title: 'Other Programming Languages'
}
const db = {
    sqlite: './img/db/sqlite.svg',
    mongo: './img/db/mongo.svg',
    icon:'./img/db/db.svg',
    title:'Databases'
}
const skills = [
    web,
    programming,
    db
]
let slideIndex = 0

rightArrow.addEventListener('click', function() {
    slides[slideIndex].classList.toggle('active')
    slides[slideIndex].classList.add('moveLeft')
    slides[slideIndex].addEventListener('animationend', function () {
        this.classList.remove('moveLeft')
    })

    slideIndex === slides.length - 1
        ? slideIndex = 0
        : slideIndex++

    slides[slideIndex].classList.toggle('active')
})
leftArrow.addEventListener('click', () => {
    slides[slideIndex].classList.toggle('active')
    slides[slideIndex].classList.add('moveRight')
    slides[slideIndex].addEventListener('animationend', function () {
        this.classList.remove('moveRight')
    })

    slideIndex === 0
        ? slideIndex = slides.length - 1
        : slideIndex--

    slides[slideIndex].classList.toggle('active')
    slides[slideIndex].classList.add('fromLeft')
    slides[slideIndex].addEventListener('animationend', function () {
        this.classList.remove('fromLeft')
    })
})

// Functions

const createSidebar = sidebar => {
    const sidebarInfo = document.createElement('div')
    const sidebarName = document.createElement('div')
    const sidebarLocation = document.createElement('div')
    const ul = document.createElement('ul')

    sidebarInfo.classList.add('info')
    sidebarName.classList.add('name')
    sidebarLocation.classList.add('location')

    sidebarLocation.innerText = 'Rosario, Santa Fe, Argentina'
    sidebarName.innerText = 'Ignacio Diaz'

    for (let personalInfo of liInfo) {
        const li = document.createElement('li')
        li.innerText = personalInfo
        ul.appendChild(li)
    }

    sidebar.appendChild(sidebarInfo)
    sidebarInfo.appendChild(sidebarName)
    sidebarInfo.appendChild(sidebarLocation)
    sidebarInfo.appendChild(ul)
}


const createHeader = (slide,id) => {
    const header = document.createElement('div')
    const left = document.createElement('div')
    const h2 = document.createElement('h2')
    const headerLogos = document.createElement('div')
    const circle = document.createElement('div')
    const icon = document.createElement('img')

    header.classList.add('header')
    left.classList.add('left')
    headerLogos.classList.add('logos')
    circle.classList.add('circle-icon')
    icon.classList.add('icon')


    h2.innerText = skills[id].title
    icon.src = skills[id].icon
    for (let l in skills[id] ) {
        if(l === 'icon') break
        const div = document.createElement('div')
        const logo = document.createElement('img')
        const p = document.createElement('p')

        logo.src = skills[id][l]
        logo.classList.add('logo')

        p.innerText = l.toUpperCase()

        div.append(logo, p)
        headerLogos.appendChild(div)
    }

    slide.appendChild(header)
    header.appendChild(left)
    left.appendChild(h2)
    left.appendChild(headerLogos)
    header.appendChild(circle)
    circle.appendChild(icon)
}


const createPercentages = (slide,id) => {
    const percentagesDiv = document.createElement('div')
    percentagesDiv.classList.add('percentages')

    for (i in skills[id]) {
        if (i === 'icon') break
        const skillPercentage = document.createElement('div')
        const img = document.createElement('img')
        const progressBar = document.createElement('div')

        skillPercentage.classList.add('skill-percentage')
        img.classList.add('logo')
        progressBar.classList.add('progress-bar')

        img.src = skills[id][i]

        progressBar.id = i

        skillPercentage.append(img, progressBar)
        percentagesDiv.append(skillPercentage)
    }

    slide.appendChild(percentagesDiv)

}

createSidebar(sidebar)

for (let s of slides) {
    createHeader(s,s.id)
    createPercentages(s,s.id)
}