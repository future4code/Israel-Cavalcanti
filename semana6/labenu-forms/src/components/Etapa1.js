import React from 'react'

function Etapa1() {
    return(
        <div>
          <h2>ETAPA 1 - DADO GERAIS</h2>
          <form>
              <label>1. Qual o seu nome?</label>
              <br />
              <input 
              type="text"
              placeholder="Nome">
              </input>

              <br />
              <label>2. Qual sua idade?</label>
              <br />
              <input 
              type="text"
              placeholder="Idade">
              </input>

              <br />
              <label>3. Qual seu email?</label>
              <br />
              <input 
              type="text"
              placeholder="Email">
              </input>

              <br />
              <label>4. Qual a sua escolaridade?</label>
              <br />
              <select>
                <option value="EM-Incompleto">Ensino médio incompleto</option>
                <option value="EM-Completo">Ensino médio completo</option>
                <option value="ES-Incompleto">Ensino superior incompleto</option>
                <option value="ES-Completo">Ensino superior completo</option>
              </select>


          </form>  
        </div>
    )
}

export default Etapa1