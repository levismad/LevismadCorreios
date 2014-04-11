<?php
class Levismad_Correios_Block_Adminhtml_Hello extends Mage_Core_Block_Template
{
	protected function getHello() {

        $resource = Mage::getSingleton('core/resource');
        $connection = $resource->getConnection('core_read');
	



 $connection->exec("DROP TABLE IF EXISTS `cep_index`;");
 $connection->exec("CREATE TABLE `cep_index` (
  `UF` char(2) NOT NULL DEFAULT '',
  `Nome` varchar(72) NOT NULL DEFAULT '',
  `Cep1` varchar(5) NOT NULL DEFAULT '',
  `Cep2` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`UF`)
) DEFAULT CHARSET=latin1;");


 $connection->exec("LOCK TABLES `cep_index` WRITE;");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2)  VALUES ('AC','Acre','69900','69999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('AL','Alagoas','57000','57999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('AM','Amazonas','69000','69299');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('AP','Amapá','68900','68999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('BA','Bahia','40000','48999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('CE','Ceará','60000','63999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('DF','Distrito Federal','70000','72799');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('ES','Espírito Santo','29000','29999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('GO','Goiás','72800','72999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('MA','Maranhão','65000','65999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('MG','Minas Gerais','30000','39999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('MS','Mato Grosso do Sul','79000','79999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('MT','Mato Grosso','78000','78899');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('PA','Pará','66000','68899');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('PB','Paraíba','58000','58999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('PE','Pernambuco','50000','56999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('PI','Piauí','64000','64999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('PR','Paraná','80000','87999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('RJ','Rio de Janeiro','20000','28999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('RN','Rio Grande do Norte','59000','59999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('RO','Rondônia','78900','78999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('RR','Roraima','69300','69399');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('RS','Rio Grande do Sul','90000','99999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('SC','Santa Catarina','88000','89999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('SE','Sergipe','49000','49999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('SP','São Paulo','01000','19999');");
 $connection->exec("INSERT INTO `cep_index` (UF,Nome,Cep1,Cep2) VALUES ('TO','Tocantins','77000','77999');");
 $connection->exec("UNLOCK TABLES;");

	return "Base Carregadaß!";
	}
}