import '../Result/Result.css'

const Result = () => {
    return (
        <div>
            <table >
                <div>
                    <tr className="table">
                        <th>#</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </div>

                <div>
                    <tr className="table">
                        <td>1</td>
                        <td>
                            Centro comercial Moctezuma
                        </td>
                        <td>
                            <button >Delete</button>
                        </td>
                    </tr>
                </div>
            </table>
        </div>
    );
};

export default Result;