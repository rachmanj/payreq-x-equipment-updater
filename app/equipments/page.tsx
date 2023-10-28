"use client";

import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";

type EquipmentData = {
  unit_code: string;
  project: string;
  plant_group: string;
  model: string;
};

const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [localEquipments, setLocalEquipments] = useState([]);

  // const url = "http://localhost/ark-fleet/api/equipments";
  const url = "http://192.168.33.15/ark-fleet/api/equipments";

  const handleGet = async () => {
    const response = await axios.get(url);
    setEquipments(response.data.data);
  };

  const postEquipment = async (equipmentData: EquipmentData) => {
    await axios.post("/api/equipments", equipmentData);
  };

  const getLocalEquipments = async () => {
    const response = await axios.get("/api/equipments");
    setLocalEquipments(response.data);
  };

  const handlePost = () => {
    // console.log("EQUIPMENT DATA", equipments);
    equipments.map((equipment) => {
      postEquipment(equipment);
    });
  };

  const handleTruncate = async () => {
    await axios.delete("/api/equipments");
  };

  return (
    <div className="flex">
      <div className="flex flex-1"></div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <Button size="sm" onClick={handleGet}>
            GET ARK-Fleet Server Data
          </Button>
          <p className="text-sm text-black bg-slate-200 rounded-sm p-2">
            Equipments: {equipments.length}
          </p>
        </div>
        <Button size="sm" onClick={handlePost}>
          POST Data
        </Button>
        <div className="flex items-center justify-between">
          <Button size="sm" onClick={getLocalEquipments}>
            GET Local Data
          </Button>
          <p className="text-sm text-black bg-slate-200 rounded-sm p-2">
            Local Equipments: {localEquipments.length}
          </p>
        </div>
        <Button variant="destructive" onClick={handleTruncate}>
          Truncate
        </Button>
      </div>
      <div className="flex flex-1"></div>
    </div>
  );
};

export default Equipment;
