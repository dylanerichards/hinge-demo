class QuestionUsersController < ApplicationController
  before_action :set_question_user, only: [:show, :update, :destroy]

  # GET /question_users
  def index
    @question_users = QuestionUser.all

    render json: @question_users
  end

  # GET /question_users/1
  def show
    render json: @question_user
  end

  # POST /question_users
  def create
    @question_user = QuestionUser.new(question_user_params)

    if @question_user.save
      render json: @question_user, status: :created, location: @question_user
    else
      render json: @question_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /question_users/1
  def update
    if @question_user.update(question_user_params)
      render json: @question_user
    else
      render json: @question_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /question_users/1
  def destroy
    @question_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question_user
      @question_user = QuestionUser.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_user_params
      params.require(:question_user).permit(:user_id, :question_id, :answer)
    end
end
