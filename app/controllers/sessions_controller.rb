class SessionsController < Devise::SessionsController
  respond_to :json, :html

  skip_before_action :verify_signed_out_user, only: :destroy
  before_action :pre_hook
  after_action :post_hook

  api :POST, '/staff/sign_in', 'Signs user in'
  param :staff, Hash, desc: 'Staff' do
    param :email, String, desc: 'Email'
    param :password, String, desc: 'Password'
  end

  def create
    respond_to do |format|
      format.html do
        if request.env['omniauth.auth']
          auth_hash = request.env['omniauth.auth']

          staff = Staff.find_by_auth(auth_hash)

          sign_in_and_redirect(resource_name, staff) if staff.present?
        else
          super
        end
      end
      format.json do
        self.resource = warden.authenticate(auth_options)
        if resource
          sign_in(resource_name, resource)
          resource.authentication_token = nil # RESET USER TOKEN AFTER GETTING RESOURCE FROM WARDEN
          resource.save # THIS FORCES A NEW USER API TOKEN TO BE GENERATED
          resource.api_token = resource.secret
          render json: resource
        else
          render json: { error: 'Invalid Login' }, status: 401
        end
      end
    end
  end

  api :DELETE, '/staff/sign_out', 'Invalidates user session'

  def destroy
    respond_to do |format|
      format.html do
        super
      end
      format.json do
        Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
        render json: {}, status: :ok
      end
    end
  end
end
