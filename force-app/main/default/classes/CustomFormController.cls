public with sharing class CustomFormController {

    @AuraEnabled
    public static void createOpportunity(String name, Decimal amount, Date closeDate){
        Opportunity opp = new Opportunity();
        opp.Name = name;
        opp.Amount = amount;
        opp.CloseDate = closeDate;
        opp.StageName = 'Prospecting';
        insert opp;
    }
}