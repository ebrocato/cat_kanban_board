import React from 'react';
import BreedList from './store'
import './catBreeds.css';


class BreedFacts extends React.Component {

  state = {
    breeds: BreedList
  }

  loopSiamese() {
    let siamese = this.state.breeds.siamese
    const siameseList = []
    siamese.map(x => siameseList.push(<li className="fact-box">{x}</li>))

    return siameseList
    
  }
  loopCalico() {
    let calico = this.state.breeds.calico
    const calicoList = []
    calico.map(x => calicoList.push(<li className="fact-box">{x}</li>))

    return calicoList

  }

  loopTuxedo() {
    let tuxedo = this.state.breeds.tuxedo
    const tuxedoList = []
    tuxedo.map(x => tuxedoList.push(<li className="fact-box">{x}</li>))
  
    return tuxedoList
  }

  render() {
  
    return (
      
      <div className="parent-parent">

      <ul className="parent-box">
        <div className="child-box">
        <h2 className="breed-title">Siamese</h2>
          {this.loopSiamese()}
        </div>
      
        <div className="child-box">
          <h2 className="breed-title">Calico</h2>
          {this.loopCalico()}
        </div>

        <div className="child-box">
          <h2 className="breed-title">Tuxedo</h2>
          {this.loopTuxedo()}
        </div>
      
      </ul>
      </div>

      

    )
  }
}



export default BreedFacts