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
            if(count($results)){
                $results[0]["resultado"] = 1;
                $sql = $connection->query('SELECT `Cep1`,`Cep2`,`UF` FROM cep_index')->fetchAll();
                $i = 0;
                $cepa =  substr($cep, 0,5);
                for($x = 0; $x<(count($sql,0)-1);$x++){
                    if(((int)$cepa >= (int)$sql[$x]["Cep1"]) && ((int)$cepa <= (int)$sql[$x]["Cep2"])){
                         $results[0]["estado"] = $sql[$x]["UF"];;
                    }
                }
                echo json_encode($results);
            }
            else{
                $results["resultado"] = 0;
                echo json_encode($results);
            }
        
        }
        else{

                $results["resultado"] = 0;
                echo json_encode($results);
        }
        
    }
}
