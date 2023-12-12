const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    const comida = foodSchedule[i]; 
    if (!omida.isVegan) {
        foodSchedule.isVegan=true
    } else {
        
    }
}


for (var i = 0; i < foodSchedule.length; i++) {
  // Verificar si la comida no es vegana
  if (!foodSchedule[i].isVegan) {
    // Reemplazar la comida no vegana con una fruta no duplicada
    const frutaNoDuplicada = fruits.find(
      (fruta) => !foodSchedule.some((comida) => comida.name === fruta)
    );
    if (frutaNoDuplicada) {
      foodSchedule[i].name = frutaNoDuplicada;
    }
  }
}

// Imprimir el array resultante
console.log(foodSchedule);
