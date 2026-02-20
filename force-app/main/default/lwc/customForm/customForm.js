import { LightningElement, track } from 'lwc';
import createOpportunity from '@salesforce/apex/CustomFormController.createOpportunity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomForm extends LightningElement {

    @track name;
    @track amount;
    @track closeDate;

    handleName(event){
        this.name = event.target.value;
    }

    handleAmount(event){
        this.amount = event.target.value;
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