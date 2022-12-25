class ItemsController < ApplicationController
  def index
    @item = Item.all
    render json: @item
  end

  def create
    token = params[:token]
    recaptcha_action = params[:action]
    verify_recaptcha_response = verify_recaptcha?(token, recaptcha_action)
    # render json: verify_recaptcha_response
    unless verify_recaptcha_response
      render json: verify_recaptcha_response
    else
      @item = Item.create(item_params)
      render json: verify_recaptcha_response
    end
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.destroy
      head :no_content, status: :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:item).permit(:item_name, :quantity)
  end
end
