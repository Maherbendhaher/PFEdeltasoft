export class ListeDemande{

  Email:string
  Nom:string
  Prenom:string
  NumeroTEL:string
  Ville:string
  Location_Code:string
  Make_Code:string
  Model_Code:string
  Serial_No:string
  VIN:string
  Model_Version_No:string
  Confirmation:Boolean
  Quantité:string
  Couleur:string




constructor(
  Email:string,
  Nom:string,
  Prenom:string,
  NumeroTEL:string,
  Ville:string,
  Location_Code:string,
  Make_Code:string,
  Model_Code:string,
  Serial_No:string,
  VIN:string,
  Quantité:string,
  Couleur:string,
  Model_Version_No:string,
  Confirmation:Boolean){
      this.Email=Email
      this.Nom=Nom
      this.Prenom=Prenom
      this.NumeroTEL=NumeroTEL
      this.Ville=Ville
      this.Location_Code=Location_Code
      this.Make_Code=Make_Code
      this.Model_Version_No=Model_Version_No
      this.Serial_No=Serial_No
      this.VIN=VIN
      this.Model_Code=Model_Code
      this.Confirmation=Confirmation
      this.Quantité=Quantité
      this.Couleur=Couleur
  }

}
