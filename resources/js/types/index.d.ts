import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    isActive?: boolean;
}

export interface SharedData extends PageProps {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    flash: {
        message?: string;
        success?: string;
        error?: string;
        info?: string;
        warning?: string;
    };
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Task {
    id: number;
    user_id: number;
    title: string;
    description: string | null;
    due_date: string | null;
    is_completed: boolean;
    created_at: string;
    updated_at: string;
    user?: User;
}

export interface PaginationPageLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page_url: string |null;
    links: PaginationPageLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export type PaginatedTasks = Pagination<Task>;


export type BreadcrumbItemType = BreadcrumbItem;
