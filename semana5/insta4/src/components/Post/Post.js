import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {IconeSave} from '../IconeSave/IconeSave'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import salvarPreto from '../../img/save.svg'
import salvarBranco from '../../img/save-white.svg'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    save: false
  }

  onClickCurtida = () => {
    if(this.setState.curtido === false){
      this.setState({
        numeroCurtidas: this.setState.numeroCurtidas + 1,
        curtido: (this.setSate.curtido = true)
      })
    console.log('Curtiu!')
  } else{
    this.setState({
      numeroCurtidas: this.setState.numeroCurtidas - 1,
      curtido: (this.setState.curtido = false),
    })
  }
}

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvou = () => {
    this.setState({
      save: !this.state.save
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvou

    if(this.state.save){
      iconeSalvou = salvarPreto
    } else {
      iconeSalvou = salvarBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSave
          icone={iconeSalvou}
          onClickIcone={this.onClickSalvou}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post