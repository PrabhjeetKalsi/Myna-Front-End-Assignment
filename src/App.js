import './App.css';

function App() {
  let total = 0;

  let blackForestCount = 0;
  function addBlackForestCake() {
    blackForestCount++;
    total += 4000;
  }
  function deleteBlackForestCake() {
    if(blackForestCount > 0)
    {
      blackForestCount--;
      total -= 4000;
    }
  }

  let strawBerryCupCakeCount = 0;
  function addStrawberryCupcake() {
    total += 500;
    strawBerryCupCakeCount++;
  }
  function deleteStrawberryCupcake() {
    if(strawBerryCupCakeCount > 0)
    {
      strawBerryCupCakeCount--;
      total -= 500;
    }
  }

  let blueberryCakeCount = 0;
  function addBlueberryCake() {
    total += 4500;
  }
  function deleteBlueberryCake() {
    if(blueberryCakeCount > 0)
    {
      blueberryCakeCount--;
      total -= 4500;
    }
  }

  let strawberryCakeCount = 0
  function addStrawberryCake() {
    total += 5000;
    strawberryCakeCount++;
  }
  function deleteStrawberryCake() {
    if(strawberryCakeCount > 0)
    {
      strawberryCakeCount--;
      total -= 5000;
    }
  }
  function checkout() {
    console.log(total);
  }
  return (
    <main>
    <div className="App">
        <h1>NEW PRODUCTS</h1>
  <div class="cards_wrap">
    <div class="card_item">
      <div class="card_inner">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80"
        />
        <div class="role_name">Black Forest Cake</div>
        <div class="price">Price: Rs. 4000</div>
        <div class="film">
        A fluffy black forest cake with a creamy frosting and fresh blueberries on top is the perfect dessert for any occasion.
        </div>
        <button onClick={addBlackForestCake}>Add to card</button>
          <button onClick={deleteBlackForestCake}>Delete</button>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <img
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div class="role_name">Strawberry Cupcakes</div>
        <div class="price">Price: Rs. 500</div>
        <div class="film">
        A strawberry cup cake with a creamy frosting and fresh blueberries on top is the perfect dessert for any occasion.
        </div>
        <button onClick={addStrawberryCupcake}>Add to card</button>
        <button onClick={deleteStrawberryCupcake}>Delete</button>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <img
          src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80"
        />
        <div class="role_name">Blueberry Cake</div>
        <div class="price">Price: Rs. 4500</div>
        <div class="film">
        A fluffy blueberry cake with a creamy frosting and fresh blueberries on top is the perfect dessert for any occasion.
        </div>
        <button onClick={addBlueberryCake}>Add to card</button>
        <button onClick={deleteBlueberryCake}>Delete</button>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <img
          src = "https://www.shutterstock.com/image-photo/raw-vegan-blueberry-cashews-cake-260nw-755758012.jpg"
        />
        <div class="role_name">Blueberry Cake</div>
        <div class="price">Price: Rs. 5000</div>
        <div class="film">
        A fluffy blueberry cake with a creamy frosting and fresh blueberries on top is the perfect dessert for any occasion.
        </div>
        <button onClick={addStrawberryCake}>Add to card</button>
        <button onClick={deleteStrawberryCake}>Delete</button>
      </div>
    </div>
  </div>
  <button onClick={checkout} class="checkout">Check Out</button>
    </div>
    
  </main>
  );
}

export default App;
