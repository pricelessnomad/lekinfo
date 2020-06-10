**Get all drugs**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Optional:**
   
    To search
    Search by `full_trade_name`  `name, atc_name`  `dosage_form `
   
    https://stg-lekinfo.herokuapp.com/api/v1/drug?all=Парацетамол
    
    Current page is 1 by default, to change use `?page=<page number>`
    
    https://stg-lekinfo.herokuapp.com/api/v1/drug?page=3
    
    Per page by default 20 items, 
    
    

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drugs :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `error message`
  
**Search by barcode**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug/<BARCODE>

* **Method:**
  
  `GET` 
  
*  **Required:**
 
    `required`

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drug :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `Invalid barcode`
  
**Search for drugs**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug/search?

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Optional:**
 
    `atc_name=[parameter]`
    `full_trade_name=[parameter]`
    `trade_name=[parameter]`
    `dosage_form=[parameter]`
    `country=[parameter]`

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drugs :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `error message`

 
