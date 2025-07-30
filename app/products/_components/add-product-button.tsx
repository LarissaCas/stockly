"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import UpsertProductDialogContent from "./upsert-product-dialog";

export const AddProductButton = () => {
  const [dialogIsOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent onSuccess={() => setDialogOpen(false)} />
    </Dialog>
  );
};
