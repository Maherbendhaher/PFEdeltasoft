export class produit{

    Location_Code:string
    Make_Code:string
    Model_Code:string
    Serial_No:string
    VIN:string
    Model_Version_No:string
  
constructor(Location_Code:string,
    Make_Code:string,
    Model_Code:string,
    Serial_No:string,
    VIN:string,
    Model_Version_No:string){
        this.Location_Code=Location_Code
        this.Make_Code=Make_Code
        this.Model_Version_No=Model_Version_No
        this.Serial_No=Serial_No
        this.VIN=VIN
        this.Model_Code=Model_Code
    }

}
