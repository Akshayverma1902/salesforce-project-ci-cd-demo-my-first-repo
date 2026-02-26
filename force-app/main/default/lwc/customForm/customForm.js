import { LightningElement, track } from 'lwc';
import createOpportunity from '@salesforce/apex/CustomFormController.createOpportunity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomForm extends LightningElement {

    @track name;
<<<<<<< HEAD
   @track amount;
    @track phone;
    @track closeDatedd;
=======
  @track amount;
    @track closeDate;
>>>>>>> 5f55afb0297c3777e06e2938a423dc5983831843

    handleName(event){
        this.name = event.target.value;
    }

    handleAmount(event){
        this.amount = event.target.value;
<<<<<<< HEAD
   }
   
     handlephone(event){
        this.phone = event.target.value;
=======
>>>>>>> 5f55afb0297c3777e06e2938a423dc5983831843
   }
   
    handleCloseDate(event){
        this.closeDate = event.target.value;
    }

    handleSave(){
        createOpportunity({
            name : this.name,
            amount : this.amount,
            closeDate : this.closeDate
        })
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Opportunity Created',
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            console.error(error);
        });
    }
}