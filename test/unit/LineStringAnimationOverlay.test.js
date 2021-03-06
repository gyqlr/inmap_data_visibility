import LineStringAnimationOverlay from '../../src/overlay/LineStringAnimationOverlay';

describe('LineStringAnimationOverlay ', () => {
    function createOverlay() {
        return new LineStringAnimationOverlay({
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 10,
                lineOrCurve: 'curve',
            },
            data: null,
        });
    }
    it('constructor ', () => {
        let overlay = createOverlay();
        expect(overlay.points).to.eql([]);
    });

    it('setData', () => {
        let overlay = createOverlay();
        overlay.setData(null);
        expect(overlay.points).to.eql([]);

        let data = [{
            geometry: {
                type: 'LineString',
                coordinates: [
                    [123, 23], 
                    [124, 24]
                ]
            },
            style:{  //样式配置
            },
            name: "",
            count: 30
        }];

        overlay.setData(data);
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);

        overlay.setData(undefined);
        expect(overlay.points).to.eql([]);
        expect(overlay.workerData).to.eql([]);

        overlay.setData(data);
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);


        overlay.setData(null);
        expect(overlay.points).to.eql([]);
        expect(overlay.workerData).to.eql([]);

    });

    it('setOptionStyle', () => {
        let overlay = createOverlay();
        
        expect(overlay.points).to.eql([]);
        expect(overlay.workerData).to.eql([]);

        let data = [{
            geometry: {
                type: 'LineString',
                coordinates: [
                    [123, 23], 
                    [124, 24]
                ]
            },
            style:{  //样式配置
            },
            name: "",
            count: 30
        }];
        overlay.setOptionStyle({
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 10,
                lineOrCurve: 'curve',
            },
            data: data,
        });
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);

        overlay.setOptionStyle({
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 10,
                lineOrCurve: 'curve',
            },
            data: null,
        });

        expect(overlay.points).to.eql([]);
        expect(overlay.workerData).to.eql([]);

        overlay.setOptionStyle({
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 10,
                lineOrCurve: 'curve',
            },
            data: data,
        });
        overlay.setOptionStyle({
            style: {
                size: 2,
                //移动点颜色
                fillColor: '#fff',
                //移动点阴影颜色
                shadowColor: '#fff',
                //移动点阴影大小
                shadowBlur: 10,
                lineOrCurve: 'curve',
            },
        });
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);


        overlay.setOptionStyle();
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);
    });


});