import React, {Component} from 'react';

 class SpeedCheck extends Component {
     state = {  }
     render() { 
         return ( 
            <React.Fragment>
                <div className="card text-center border border-info">
                <div className="card-header">
                    <h1>Yazma Testi Hızı</h1>
                </div>
                <div className="card-body">
                    <p>Allatki metni kutucuğa girmeye başladığınız anda süreniz başlayacak.</p>
                    <p>Bitirmek için ctrl+enter kombinasyonunu giriniz.</p>
                    <p>Ayrıca karakter sınırını aştığınızda test kendiliğinden sonlanacaktır.</p>
                </div>
                <div className="card-footer">
                    Hello react Native
                </div>
            </div>
            
            <hr/>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Metin grubu" ></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="reset">Sıfırla</button>
                </div>
            </div>
            <hr/>
            <div className="card-deck">
                
                <div className="card">
                    <div className="card body">
                        Süre:
                    </div>
                </div>
                <div className="card">
                    <div className="card body">
                        Doğruluk:
                    </div> 
                </div>
                <div className="card">
                    <div className="card body">
                        DBK:
                    </div> 
                </div>
            </div>
            </React.Fragment>
          );
     }
 }
  
 export default SpeedCheck;
