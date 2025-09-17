
///<reference path="../contracts/ProductContract.ts" />

import ProductContract = Project.Contracts.ProductContract;

namespace Project 
{
    export namespace Templates
    {
         export abstract class ProductTemplate implements ProductContract
         {
              public Name:string = "";
              public Price:number = 0;
              public Qty:number = 0;
              public abstract Total():number;
              public abstract Print():void;
         }
    }
}
