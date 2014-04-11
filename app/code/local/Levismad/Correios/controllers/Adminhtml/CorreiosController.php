<?php
class Levismad_Correios_Adminhtml_CorreiosController extends Mage_Adminhtml_Controller_Action {

	public function indexAction() {
		$this->loadLayout();
		$this->renderLayout();
		//echo "Hello World";
	}


    public function baseAction(){
        echo "sucess";
    }
}
