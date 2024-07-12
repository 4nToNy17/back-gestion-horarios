import { Reserva } from "@prisma/client";


export const fromPrismaReserva = (reserva: Reserva) => ({
    idReserva: reserva.idReserva,
    Usuario: reserva.Usuario,
    FechaReserva: reserva.FechaReserva,
    Descripcion: reserva.Descripcion,
    Estado: reserva.Estado,
    Horario: reserva.Horario,
});

export const toPrismaReserva = (reserva: IReserva) => ({
    idReserva: reserva.idReserva,
    Usuario: reserva.usuario,
    FechaReserva: reserva.fecha,
    Descripcion: reserva.descripcion,
    Estado: reserva.estado,
    Horario: reserva.horario,
});