import { Request, Response } from "express";
import * as reservaService from "../services/reservaService";
import { ResponseModel } from "../shared/responseModel";


export const insertarReserva = async (req: Request, res:Response)=>{
    try {
        console.log('reservaController::insertarReserva');
        const response = await reservaService.insertarReserva(req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarReserva = async (req: Request, res: Response) => {
    try {
        console.log('reservaController::listarReservas');
        const reservas = await reservaService.listarReserva();
        res.json(ResponseModel.success(reservas));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerReserva = async (req: Request, res: Response) => {
    try {
        console.log('reservaController::obtenerReserva');
        const { id } = req.params;
        const reserva = await reservaService.obtenerReserva(Number(id));
        res.json(ResponseModel.success(reserva));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const modificarReserva = async (req: Request, res: Response) => {
    try {
        console.log('reservaController::modificarReserva');
        const { id } = req.params;
        const response = await reservaService.modificarReserva(Number(id),req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarReserva = async (req: Request, res: Response) => {
    try {
        console.log('reservaController::eliminarReserva');
        const { id } = req.params;
        const response = await reservaService.eliminarReserva(Number(id));
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}
