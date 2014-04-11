<?php
/**
 * app/code/local/Levismad/Correios/controllers/IndexController.php
 *
 *
 * @author    Levi Esteves <levi.esteves@gmail.com>
 * @category  Levismad
 * @package   Correios
 * @copyright Copyright (c) 2014 Levismad (htttp://www.levismad.com/)
 */
class Levismad_Correios_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
        
        $resource = Mage::getSingleton('core/resource');
        $connection = $resource->getConnection('core_read');
        
        parse_str($_SERVER['QUERY_STRING']);
        if($cep){
            $results = $connection->query('SELECT * FROM cep where cep = \''.$cep.'\'')->fetchAll();
            echo json_encode($results);
        
        }
        else{

            echo "Cep invalido.";
        }
        
    }
}
