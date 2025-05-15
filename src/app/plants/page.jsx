"use client";
import { useState } from "react";
import data from "../../lib/data"
import PlantCard from "../../components/PlantCard"

export default function PlantsPage() {

  const [product, setProduct] = useState(data);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestras Plantas 🌿</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {product.map((plants) => (
          <PlantCard
            plants={plants}

          />
        ))}
      </div>
    </div>
  );
}