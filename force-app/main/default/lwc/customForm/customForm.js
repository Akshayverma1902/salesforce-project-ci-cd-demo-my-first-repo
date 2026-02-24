import { LightningElement, track } from 'lwc';
import createOpportunity from '@salesforce/apex/CustomFormController.createOpportunity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomForm extends LightningElement {

    @track name;
 
    @track closeDate;

   

    handleAmount(event){
        this.amount = event.target.value;
   }
   
    

    handleSave(){
       
       
    }
}