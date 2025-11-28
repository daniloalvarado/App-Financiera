"use client";

import { ArrowUpRight, ArrowDownRight, CreditCard, Trash2, X, Pencil } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { updateDefaultAccount, deleteAccount, updateAccount } from "@/actions/account";
import { toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

// Mapa de tipos de cuenta
const accountTypeMap = {
  CURRENT: "Corriente",
  SAVINGS: "Ahorros",
};

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault, initialBalance } = account;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editData, setEditData] = useState({
    name: name,
    type: type,
    initialBalance: (initialBalance || balance).toString(),
  });

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const {
    loading: deleteLoading,
    fn: deleteAccountFn,
    data: deletedAccount,
    error: deleteError,
  } = useFetch(deleteAccount);

  const {
    loading: updateLoading,
    fn: updateAccountFn,
    data: updatedAccountData,
    error: updateError,
  } = useFetch(updateAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault();

    if (isDefault) {
      toast.warning("Necesitas al menos 1 cuenta predeterminada");
      return;
    }

    await updateDefaultFn(id);
  };

  const handleDeleteAccount = async () => {
    setShowDeleteDialog(false);
    await deleteAccountFn(id);
  };

  const handleUpdateAccount = async () => {
    if (!editData.name.trim()) {
      toast.error("El nombre de la cuenta es obligatorio");
      return;
    }
    if (isNaN(parseFloat(editData.initialBalance)) || parseFloat(editData.initialBalance) < 0) {
      toast.error("El saldo inicial debe ser un número válido");
      return;
    }
    await updateAccountFn(id, {
      name: editData.name,
      type: editData.type,
      initialBalance: editData.initialBalance,
    });
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Cuenta predeterminada actualizada exitosamente");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Error al actualizar la cuenta predeterminada");
    }
  }, [error]);

  useEffect(() => {
    if (deletedAccount?.success) {
      toast.success(deletedAccount.message || "Cuenta eliminada exitosamente");
    }
  }, [deletedAccount]);

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError.message || "Error al eliminar la cuenta");
    }
  }, [deleteError]);

  useEffect(() => {
    if (updatedAccountData?.success) {
      toast.success(updatedAccountData.message || "Cuenta actualizada exitosamente");
      setShowEditDialog(false);
    }
  }, [updatedAccountData]);

  useEffect(() => {
    if (updateError) {
      toast.error(updateError.message || "Error al actualizar la cuenta");
    }
  }, [updateError]);

  return (
    <>
      <Card className="hover:shadow-md transition-shadow">
        <Link href={`/account/${id}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium capitalize flex-1">
              {name}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Switch
                checked={isDefault}
                onClick={handleDefaultChange}
                disabled={updateDefaultLoading}
              />
              {/* Botón editar */}
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowEditDialog(true);
                }}
                disabled={updateLoading}
                title="Editar cuenta"
              >
                <Pencil className="h-4 w-4 text-blue-500" />
              </Button>
              {/* Botón eliminar */}
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowDeleteDialog(true);
                }}
                disabled={deleteLoading}
                title="Eliminar cuenta"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              S/ {parseFloat(balance).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Cuenta {accountTypeMap[type] || type}
            </p>
            {initialBalance && (
              <p className="text-xs text-muted-foreground mt-2">
                Saldo Inicial: S/ {parseFloat(initialBalance).toFixed(2)}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              Ingreso
            </div>
            <div className="flex items-center">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              Gasto
            </div>
          </CardFooter>
        </Link>
      </Card>

      {/* Delete Confirmation Drawer */}
      <Drawer open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-white">
                  ¿Eliminar cuenta?
                </DrawerTitle>
                <DrawerDescription className="text-white mt-2">
                  Estás a punto de eliminar la cuenta <strong>"{name}"</strong>
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="px-4 py-4 space-y-4">
            <div className="p-4 rounded">
              <p className="text-sm font-semibold text-white">
                ⚠️ Advertencia importante:
              </p>
              <ul className="text-xs textwhite mt-2 space-y-1 ml-2">
                <li>• Se eliminarán <strong>todas las transacciones</strong> de esta cuenta</li>
                <li>• Esta acción <strong>NO se puede deshacer</strong></li>
              </ul>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t ">
              <DrawerClose asChild>
                <Button variant="outline" className="text-white">
                  Cancelar
                </Button>
              </DrawerClose>
              <Button
                onClick={handleDeleteAccount}
                disabled={deleteLoading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {deleteLoading ? "Eliminando..." : "Eliminar"}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Edit Account Drawer */}
      <Drawer open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-white">
                  Editar cuenta
                </DrawerTitle>
                <DrawerDescription className="text-white mt-2">
                  Modifica los detalles de tu cuenta
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="px-4 py-4 space-y-4">
            {/* Nombre de la cuenta */}
            <div>
              <label className="text-sm font-medium text-white">
                Nombre de la cuenta
              </label>
              <Input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                placeholder="Ej: Cuenta Principal"
                className="mt-2 bg-white text-black border-gray-300"
              />
            </div>

            {/* Tipo de cuenta */}
            <div>
              <label className="text-sm font-medium text-white">
                Tipo de cuenta
              </label>
              <Select
                value={editData.type}
                onValueChange={(value) =>
                  setEditData({ ...editData, type: value })
                }
              >
                <SelectTrigger className="mt-2 bg-white text-black border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CURRENT">Corriente</SelectItem>
                  <SelectItem value="SAVINGS">Ahorros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Saldo inicial */}
            <div>
              <label className="text-sm font-medium text-white">
                Saldo inicial
              </label>
              <Input
                value={editData.initialBalance}
                onChange={(e) =>
                  setEditData({ ...editData, initialBalance: e.target.value })
                }
                placeholder="0.00"
                type="number"
                step="0.01"
                className="mt-2 bg-white text-black border-gray-300"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Saldo actual: S/ {parseFloat(balance).toFixed(2)}
              </p>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t">
              <DrawerClose asChild>
                <Button variant="outline" className="text-white">
                  Cancelar
                </Button>
              </DrawerClose>
              <Button
                onClick={handleUpdateAccount}
                disabled={updateLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {updateLoading ? "Actualizando..." : "Guardar cambios"}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
