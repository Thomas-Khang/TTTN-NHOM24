import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'user-manage', // Đường dẫn cho trang quản lý người dùng
    component: UserManagementComponent,
    data: {
      title: 'User Management',
    },
  },
];
