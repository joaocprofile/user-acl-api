export interface IUserDTO {
  id?: string
  tenant_id: string
  name: string
  email: string
  password_hash: string
  is_AccountConfirmed?: boolean
  last_login?: Date
  is_active?: boolean
  created_at?: Date
}