document.addEventListener("DOMContentLoaded", function(){
  class CalculatorGravitatie {

    constructor() {
      this._gravitateLuna = 0.16; 
      this._inputGreutate = document.querySelector("#input-greutate");
      this._rezultat = document.querySelector("#rezultat");
      this._btnCalculeaza = document.querySelector("#click-btn");
  
      if (this._btnCalculeaza) {
        this._btnCalculeaza.addEventListener("click", () => {
          this.calculeazaGreutatePeLuna();
        });
      } else {
        console.error("Button for calculation not found.");
      }
    }
  
    calculeazaGreutatePeLuna() {
      if (!this._inputGreutate || !this._rezultat) {
        console.error("Input or result element not found.");
        return;
      }
  
      const greutateOm = parseFloat(this._inputGreutate.value);
      if (isNaN(greutateOm)) {
        if (this._rezultat) {
          this._rezultat.innerHTML = "Va rugam introduceti o valoare valida pentru greutate.";
        }
        return;
      }
  
      const greutatePeLuna = greutateOm * this._gravitateLuna / 100;
      if (this._rezultat) {
        this._rezultat.innerHTML = `Greutatea pe Luna este: ${greutatePeLuna.toFixed(2)} kg`;
      }
    }
  
    get gravitateLuna() {
      return this._gravitateLuna;
    }
  
    set gravitateLuna(nouaGravitate) {
      if (nouaGravitate >= 0) {
        this._gravitateLuna = nouaGravitate;
      } else {
        console.error("Gravitatea pe Luna nu poate fi negativa!");
      }
    }
  }
  
  const calculator = new CalculatorGravitatie();
  
});
