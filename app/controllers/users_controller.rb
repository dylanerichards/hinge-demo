class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    @user.update(user_params)
    photo_index = params["user"]["photo_index"]
    question = params["user"]["question"]
    answer = params["user"]["answer"]

    if photo_index
      @user.photos[photo_index] = params["user"]["photo"]
      @user.save
    end

    if question
      question_attributes = { "question_#{params["user"]["question_number"]}" => question }
      @user.update(question_attributes)
    end

    if answer
      answer_attributes = { "answer_#{params["user"]["answer_number"]}" => answer }
      @user.update(answer_attributes)
    end

    if @user.valid?(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:first_name, :photo_index, :photo, :last_name, :photos)
    end
end
