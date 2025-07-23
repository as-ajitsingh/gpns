import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const [req] = context?.getArgs();
        const userRole = req?.user?.role;

        const requiredRoles = this.reflector.getAllAndMerge('roles', [context.getClass(), context.getHandler()]) || [];

        return requiredRoles.some((requiredRole) => requiredRole == userRole);
    }
}