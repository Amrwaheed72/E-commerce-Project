
const Testupdate = () => {

    // for test only, do not use in any files or it will miss up our json server
    // i repeate , do not user in any files unless you need to add the temp products to your json server agan.

    const data = [
        {
    
          "creatorId": 1,
          "name": "T-Shirt 1",
          "price": 15.99,
          "description": "Comfortable cotton T-shirt",
          "image": 0,
          "gallery": [
            1,
            2
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 2",
          "price": 16.99,
          "description": "Graphic T-shirt with cool print",
          "image": 3,
          "gallery": [
            4,
            5
          ],
          "rating": 4.7,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Jeans",
          "price": 39.99,
          "description": "Slim-fit blue jeans",
          "image": 6,
          "gallery": [
            7,
            8
          ],
          "rating": 4,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Sneakers",
          "price": 59.99,
          "description": "Stylish sneakers for everyday wear",
          "image": 9,
          "gallery": [
            10,
            11
          ],
          "rating": 4.8,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Hoodie",
          "price": 34.99,
          "description": "Warm and comfortable hoodie",
          "image": 12,
          "gallery": [
            13,
            14
          ],
          "rating": 4.6,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Cap",
          "price": 14.99,
          "description": "Trendy cap for sunny days",
          "image": 15,
          "gallery": [
            16,
            17
          ],
          "rating": 4.3,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 3",
          "price": 17.99,
          "description": "Classic round neck T-shirt",
          "image": 18,
          "gallery": [
            19,
            20
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 4",
          "price": 18.99,
          "description": "Casual short-sleeve T-shirt",
          "image": 21,
          "gallery": [
            22,
            23
          ],
          "rating": 4.4,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 5",
          "price": 19.99,
          "description": "Comfortable printed T-shirt",
          "image": 24,
          "gallery": [
            25,
            26
          ],
          "rating": 4.6,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Polo Shirt",
          "price": 25.99,
          "description": "Classic polo shirt for a smart look",
          "image": 27,
          "gallery": [
            28,
            29
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Tank Top",
          "price": 12.99,
          "description": "Lightweight tank top for summer",
          "image": 30,
          "gallery": [
            31,
            32
          ],
          "rating": 4.3,
          "category": "Women"
        },
        {
    
          "creatorId": 1,
          "name": "Button-Up Shirt",
          "price": 29.99,
          "description": "Formal button-up shirt for office wear",
          "image": 33,
          "gallery": [
            34,
            35
          ],
          "rating": 4.6,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Sweatshirt",
          "price": 29.99,
          "description": "Cozy sweatshirt for chilly days",
          "image": 36,
          "gallery": [
            37,
            38
          ],
          "rating": 4.4,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Joggers",
          "price": 34.99,
          "description": "Comfortable joggers for lounging",
          "image": 39,
          "gallery": [
            40,
            41
          ],
          "rating": 4.5,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Shorts",
          "price": 24.99,
          "description": "Casual shorts for summer days",
          "image": 42,
          "gallery": [
            43,
            44
          ],
          "rating": 4.3,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Windbreaker",
          "price": "49.99",
          "description": "Lightweight windbreaker jacket",
          "image": 45,
          "gallery": [
            46,
            47
          ],
          "rating": 4.6,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Pajama Set",
          "price": 35.99,
          "description": "Cozy pajama set for a good night's sleep",
          "image": 48,
          "gallery": [
            49,
            50
          ],
          "rating": 4.7,
          "category": "Women"
        },
        {
    
          "creatorId": 1,
          "name": "Swim Shorts",
          "price": 29.99,
          "description": "Stylish swim shorts for the beach",
          "image": 51,
          "gallery": [
            52,
            53
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "Beanie",
          "price": 14.99,
          "description": "Warm beanie for winter",
          "image": 54,
          "gallery": [
            55,
            56
          ],
          "rating": 4.4,
          "category": "Unisex"
        },
        {
    
          "creatorId": 1,
          "name": "Scarf",
          "price": 19.99,
          "description": "Soft scarf for cold weather",
          "image": 57,
          "gallery": [
            58,
            59
          ],
          "rating": 4.5,
          "category": "Women"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 6",
          "price": 15.99,
          "description": "Comfortable cotton T-shirt",
          "image": 60,
          "gallery": [
            61,
            62
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 7",
          "price": 15.99,
          "description": "Comfortable cotton T-shirt",
          "image": 63,
          "gallery": [
            64,
            65
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 8",
          "price": 15.99,
          "description": "Comfortable cotton T-shirt",
          "image": 66,
          "gallery": [
            67,
            68
          ],
          "rating": 4.5,
          "category": "Men"
        },
        {
    
          "creatorId": 1,
          "name": "T-Shirt 9",
          "price": 15.99,
          "description": "Comfortable cotton T-shirt",
          "image": 69,
          "gallery": [
            70,
            71
          ],
          "rating": 4.5,
          "category": "Men"
        }
      ]
    
      const createProducts = async () => {
        try {
          for (const product of data) {
            const response = await fetch('http://localhost:5000/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({...product, "id": Date.now()}),
            });
      
            if (!response.ok) {
              throw new Error('Failed to create product');
            }
      
            const result = await response.json();
            console.log('Product created:', result);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
      createProducts();
  return (
    <div>testupdate</div>
  )
}

export default Testupdate