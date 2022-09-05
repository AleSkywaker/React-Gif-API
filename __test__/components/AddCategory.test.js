import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory';
describe('Test in <AddCategory/>', () => {

  const onNewCategory = ()=>{};
  const inputValue = 'Alex';

  test('should modify value in input text', ()=>{

    const {getByTestId } = render(<AddCategory onNewCategory={() => {}} />);
    const input = getByTestId('shearchGifts');

    fireEvent.input(input, { target: { value: inputValue } });

    expect( input.value ).toBe('Alex')
    // screen.debug();
  })
  test('should call onNewCategory if input is not empty', () => {

    const onNewCategory = jest.fn();
    const { getByTestId } = render(<AddCategory onNewCategory={onNewCategory} />);
  // console.log(ver)
    const input = getByTestId('shearchGifts');
    const form = screen.getByRole('form');
    // const input = screen.getAllByRole('textbox')
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit( form );

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
   })

   test('should no submit the form if input is empty', () => {
    const onNewCategory = jest.fn();
    const { getByTestId } = render(<AddCategory onNewCategory={onNewCategory} />);

     const input = getByTestId('shearchGifts');
     const form = screen.getByRole('form');
     // const input = screen.getAllByRole('textbox')
     fireEvent.input(input, { target: { value: '' } });
     fireEvent.submit(form);

     expect(onNewCategory).not.toHaveBeenCalled();
     expect(onNewCategory).toHaveBeenCalledTimes(0);

    })

 })