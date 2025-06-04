import { test, expect } from '@playwright/test';
import { request } from 'http';
var userId;
test('Get Users GET', async({request})=>{

   const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect (response.status()).toBe(200)


});

test('Create User POST', async({request})=>{

    const response =    await request.post('https://reqres.in/api/users',
            {
                data:{"name":"Dilawar Kumat","Job":"SQA Engineer" },
                headers:{
                    'x-api-key': 'reqres-free-v1',
                    "Accept":"application/json",
                    
                 }

            });
console.log(await response.json())
expect(response.status()).toBe(201)
var res=await response.json()
           userId= res.id

});

test('Update User', async({request})=>{

    const response =    await request.put('https://reqres.in/api/users/'+userId,
            {
                data:{"name":"Dilawar Kumar","Job":"TESTING Engineer" },
                headers:{'x-api-key': 'reqres-free-v1',"Accept":"application/json"}

            });
console.log(await response.json())
expect(response.status()).toBe(200)




});
