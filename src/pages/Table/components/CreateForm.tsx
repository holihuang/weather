import { Button, Modal } from 'antd';
import React, { PropsWithChildren } from 'react';
import { connect } from '@umijs/max';

function mapStateToProps(state: any) {
  const { create } = state || {};
  return { create };
}

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  create: any;
  dispatch: () => void;
}

const CreateForm: React.FC<PropsWithChildren<CreateFormProps>> = (props) => {
  const { modalVisible, onCancel, dispatch } = props;
  function handleAdd() {
    dispatch({
      type: 'create/add',
    });
  }
  function handleAddAsync() {
    dispatch({
      type: 'create/addAsync',
    });
  }
  return (
    <Modal
      destroyOnClose
      title="新建"
      width={420}
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
      <div>{props.create.count}</div>
      <Button onClick={handleAdd}>+</Button>
      <Button onClick={handleAddAsync}>异步+</Button>
    </Modal>
  );
};

// export default CreateForm;
export default connect(mapStateToProps)(CreateForm);
