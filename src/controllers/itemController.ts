import { Request, Response } from "express";
import { Item } from "../models/item";

let items: Item[] = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
];

export const getItems = (req: Request, res: Response) => {
  res.json(items);
};

export const getItemById = (req: Request, res: Response) => {
  const item = items.find((i) => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  res.json(item);
};

export const createItem = (req: Request, res: Response) => {
  const newItem: Item = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
  };

  items.push(newItem);

  res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response) => {
  const item = items.find((i) => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  item.name = req.body.name || item.name;
  item.price = req.body.price || item.price;

  res.json(item);
};

export const deleteItem = (req: Request, res: Response) => {
  items = items.filter((i) => i.id !== Number(req.params.id));

  res.json({
    message: "Item deleted",
  });
};