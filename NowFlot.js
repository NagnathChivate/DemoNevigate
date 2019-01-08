/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
         function loadnxtprv(){  
                    $(".maincontainer .inner-container").each(function(e) {
                        if (e != 0)
                            $(this).hide();
                    });
                    $("#next").click(function(){
                        if ($(".maincontainer .inner-container:visible").next().length != 0){
                                $(".maincontainer .inner-container:visible").next("div").addClass("Activeblock");
                             $(".maincontainer .inner-container:visible").next().show().prev().hide();
                            setTimeout(function () {
                                $(".Activeblock").removeClass("Activeblock");
                               
                            },500);                             
                        }                           
                        else {
                            $(".maincontainer .inner-container:visible").hide();
                            $(".maincontainer .inner-container:first").show();
                        }
                        return false;
                    });

                    $("#prev").click(function(){
                        if ($(".maincontainer .inner-container:visible").prev().length != 0){
                            $(".maincontainer .inner-container:visible").prev("div").addClass("backActiveblock")
                            $(".maincontainer .inner-container:visible").prev().show().next().hide();
                            setTimeout(function () {
                                $(".backActiveblock").removeClass("backActiveblock");
                            },500);
                        }else {
                            $(".maincontainer .inner-container:visible").hide();
//                            alert("")
//                            $(".prev").attr("disabled");
                            $(".maincontainer .inner-container:last").show();
                        }
                        return false;
                    });
                }
                
       function Navigatelink(liktxt){           
            var txtval = $(liktxt).text();
            $(".active").removeClass("active");
            $(liktxt).parent('.ulli').addClass("active");
                    if(txtval=="Index"){
                        var urlpath='Index.html';
                        callajax (urlpath);
                    }
                    if(txtval=="HINDI"){
                        var urlpath='HINDI.html';
                        callajax (urlpath);
                    }
                    if(txtval=="TELUGU"){                        
                        var urlpath='TELUGU.html';
                       callajax (urlpath);
                    }
                    if(txtval=="MARATHI"){
                       var urlpath='MARATHI.html';
                       
                       callajax (urlpath);
                                  
                    }
       }         
        function callajax (urlpath){
             $.ajax({
                url:urlpath ,
                success: function(data) {
                    $(".rightside").html(data);
                    $(".Template").addClass("Pagehide");
                }
            });
            setTimeout(function () {
                loadnxtprv();  
                $(".Pagehide").removeClass("Pagehide");
            },100); 
            
        }
        
        function btnmenu(){
            debugger;
            $(".leftSide").toggle("slow");
        }
