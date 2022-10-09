import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";
import {makeAutoObservable,observe} from "mobx";

interface UIModelData{
	demo:string;
}

/**
 * @namespace be.wl.externallib.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	public onInit(): void {
		const jsonModel = new JSONModel({demo:"Hello"});
		makeAutoObservable(jsonModel.getData());
		observe(jsonModel.getData() as UIModelData,()=>{
			jsonModel.updateBindings(true);
		});
		this.getView().setModel(jsonModel);
	}
	public sayHello() : void {
		const data = (this.getView().getModel() as JSONModel).getData() as UIModelData;
		data.demo = "Hello World!";
		// MessageBox.show("Hello World!");
	}

}
