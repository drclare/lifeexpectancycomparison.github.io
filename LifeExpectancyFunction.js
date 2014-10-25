function LifeExpectancyMen(p1,p2,p3,p4,p5,p6,p7)
{
var c1=1.136010363; //first fudge factor
var c2=3.99905; //second fudge factor
var c3=5.85269589; //third fudge factor
var mortality =[0.00877,0.0018696,0.0011685,0.00128535,0.007873182	0.011188807,0.013434589,0.023098581,0.032150728,0.035004372,0.047519568,0.073148804,0.10048254,0.126631637,	0.182113636,0.315259656,0.418307235,0.569840581,1];
//mortality rates
var mortality_extra;
var lives;
var lifeyears;
var TotalLives;    
//assigning the first parameter to the ages 0-14    
mortality_extra[0]=mortality[0]/p1;
mortality_extra[1]=mortality[1]/p1;
mortality_extra[2]=mortality[2]/p1;
mortality_extra[3]=mortality[3]/p1;
 //assigning the second parameter to the ages 15-29
mortality_extra[4]=mortality[4]/p2;
mortality_extra[5]=mortality[5]/p2;
mortality_extra[6]=mortality[6]/p2;
    //assigning the third parameter to the ages 30-39
mortality_extra[7]=mortality[7]/p3;
mortality_extra[8]=mortality[8]/p3;
    //assigning the fourth parameter to the ages 40-49
mortality_extra[9]=mortality[9]/p4;
mortality_extra[10]=mortality[10]/p4;
    //assigning the fifth parameter to the ages 50-59
mortality_extra[11]=mortality[11]/p5;
mortality_extra[12]=mortality[12]/p5;
    //assigning the sixth parameter to the ages 60-69
mortality_extra[13]=mortality[13]/p6;
mortality_extra[14]=mortality[14]/p6;
    //assigning the last parameter to the rest
mortality_extra[15]=mortality[15]/p7;
mortality_extra[16]=mortality[16]/p7;
mortality_extra[17]=mortality[17]/p7;
    //no parameter added as it is the last of the cohort
mortality_extra[18]=mortality[18];

lives[0]=100000;
for (i=1, i<=18,i++){
lives[i]=lives[i-1]*(1-moratlity_extra[i-1])
};

lifeyears[0]=lives[0]-(lives[0]-lives[1])/c1;
lifeyears[1]=c2*(lives[1]-(lives[1]-lives[2])/2);

for (i=2, i<1=7,i++){
    lifeyears[i]=5*(lives[i]-(lives[i]-lives[i+1])/2)
};    
lifeyears[18]=c3*lives[18];

for (i=0, i<=18,i++){    
TotalLives = Totallives+lifeyears[i];
}

result=TotalLives/lives[0];    

}


result=LifeExpectancyMen(0.77,0.77,0.73,0.81,0.75,0.73	0.67);
