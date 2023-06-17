import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar.jsx'
import Footer from './component/Footer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <main className="containerTextoApresentacao">
        <h3 className='textoDeApresentacao'>Apresentamos a LABFruit Inc. , uma empresa inovadora dedicada ao mundo da ciência e tecnologia aplicada à produção de alimentos saudáveis. Na LABFruit, acreditamos que a natureza é uma fonte inesgotável de conhecimento e inspiração. Nossa missão é revolucionar a indústria alimentícia por meio de pesquisas avançadas e desenvolvimento de tecnologias de ponta. Nosso foco está na criação e cultivo de frutas e vegetais de alta qualidade, maximizando seu valor nutricional e promovendo um estilo de vida saudável. Contamos com uma equipe de cientistas, engenheiros e especialistas em alimentos altamente capacitados, que combinam conhecimentos multidisciplinares para impulsionar a inovação e criar produtos que atendam às necessidades e exigências dos consumidores. Na LABFruit, nos orgulhamos de utilizar técnicas de cultivo sustentáveis e respeitosas com o meio ambiente. Investimos em pesquisas sobre novas variedades de plantas, otimização do processo de produção e utilização de recursos naturais de forma responsável. Nossos produtos são desenvolvidos com o compromisso de oferecer alimentos frescos, saborosos e nutritivos para pessoas de todas as idades. Acreditamos que uma alimentação saudável é essencial para o bem-estar e qualidade de vida, e estamos empenhados em contribuir para um futuro mais sustentável e saudável para todos. Seja bem-vindo ao mundo da LABFruit Inc. , onde a ciência e a natureza se unem para criar alimentos de excelência. Junte-se a nós nessa jornada rumo a um futuro alimentar mais inovador, saudável e delicioso!</h3>
      </main>
      <Footer/>
    </div>
  )
}

export default App
