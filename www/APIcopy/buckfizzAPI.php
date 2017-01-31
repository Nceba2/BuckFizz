<?php
header('Access-Control-Allow-Origin: *');

               $a=0;
               $i=3;
               $j=5;

for ($a=1; $a <=100; $a++) { 
               # code...
                                                            
                              if($i==$a && $j!=$a){
                                             echo "fizz ";
                                             $i = $i+3;
                              }
                              else if($j==$a && $i==$a){
                                             echo "Buck fizz ";
                                             $j = $j+5;
                                             $i = $i+3;
                              }
                              else if($j==$a && $i!=$a){
                                             echo "Buck ";
                                             $j = $j+5;
                              }
                              else{
                                             echo $a." ";
                              }
}



?>
