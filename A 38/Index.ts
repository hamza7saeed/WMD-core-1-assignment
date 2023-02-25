function describe_city(City: any, Country = 'Pakistan'): void{
    console.log(`${City} is the city of ${Country}.`);
} 
describe_city("Islamabad");
describe_city("Rawalpindi");
describe_city("Dahaka", "Bangladash");