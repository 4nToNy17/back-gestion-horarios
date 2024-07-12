import { Reserva, PrismaClient } from "@prisma/client";
import { fromPrismaReserva, toPrismaReserva } from "../mappers/reservaMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const insertarReserva = async (reserva: IReserva)=>{
    console.log('reservaService::insertarReserva');
    await prisma.reserva.create({
        data: toPrismaReserva(reserva)
    });
    return RESPONSE_INSERT_OK;
}

export const listarReserva = async () => {
    console.log('reservaService::listarReserva');
    const reservas: Reserva[] = await prisma.reserva.findMany({
        where: {
            Estado: 'Casado'
        },
        orderBy: {
            idReserva: 'asc'
        }
    });
    return reservas.map((reserva: Reserva)=> fromPrismaReserva(reserva));
}

export const obtenerReserva = async (idReserva: number)=> {
    console.log('reservaService::obtenerReserva');
    const reserva: Reserva = await prisma.reserva.findUnique({
        where: {
            idReserva: idReserva,
            Horario: ''
        }
    });
    return fromPrismaReserva(reserva);
}

export const modificarReserva = async (idReserva: number, reserva: IReserva ) => {
    console.log('reservaService::modificarReserva');
    await prisma.reserva.update({
        data: toPrismaReserva(reserva),
        where: {
            idReserva: idReserva
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarReserva = async (idReserva: number) => {
    await prisma.reserva.update({
        data: {
            Descripcion: '' 
        },
        where: {
            idReserva: idReserva
        }
    });
    return RESPONSE_DELETE_OK;
}

